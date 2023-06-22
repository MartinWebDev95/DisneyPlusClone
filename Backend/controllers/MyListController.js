import MyList from '../models/MyList.js';

// Guardar una pelicula o serie en la BD
const addItemToMyList = async (req, res) => {
  const {
    idItem, posterPath, type, userId,
  } = req.body;

  try {
    // Crear un nuevo item
    const newItem = new MyList({
      idItem,
      posterPath,
      type,
      usersId: { userId },
    });

    // Guardar el item en la BD
    await newItem.save();

    res.status(200).json({
      msg: 'Película o serie guardada correctamente en mi lista',
    });
  } catch (error) {
    res.json({
      msg: 'No se ha podido guardar el item',
    });
  }
};

// Actualizar la pelicula o serie para que también pertenezca al usuario autenticado actualmente
const updateItemFromMyList = async (req, res) => {
  const { userId, idMongoose } = req.body;

  try {
    await MyList.updateOne({ _id: idMongoose }, {
      $push: {
        usersId: {
          userId,
        },
      },
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    throw new Error(err.message);
  }
};

// Obtener todas las películas o series que pertenezcan al usuario autenticado
const getItemsFromMyList = async (req, res) => {
  const { userId } = req.params;

  // Obtener todos los items de la BD
  const allItems = await MyList.find();

  // Obtener solo los items que tengan el usuario autenticado
  const filterItems = allItems.filter((item) => (
    item.usersId.some((subId) => subId.userId === userId)
  ));

  return res.status(200).json(filterItems);
};

// Obtener una película o serie en específico
const getItemFromMyList = async (req, res) => {
  // Obtener el item específico
  const itemMyList = await MyList.find().where('idItem').equals(req.params.id);

  // Si el item no existe en la BD se devuelve false
  if (itemMyList.length === 0) {
    return res.json({ ok: false });
  }

  // Comprobar si el item pertenece al usuario actual
  const belongsToUser = itemMyList[0]?.usersId.some((subId) => subId.userId === req.params.userId);

  return res.status(200).json({ ok: true, itemMyList, belongsToUser });
};

// Eliminar una película o serie que pertenezca al usuario autenticado actualmente
const deleteItemFromMyList = async (req, res) => {
  const { userId, idMongoose } = req.body;

  try {
    // Obtener el item específico
    const itemToDelete = await MyList.findById({ _id: idMongoose }).exec();

    // Si la película o serie pertenece a mas de un usuario, solo se elimina al usuario actual del
    // array de usuarios, pero si solo pertenece a un usuario, se elimina la película o serie por
    // completo de la BD
    if (itemToDelete?.usersId.length > 1) {
      await MyList.updateOne({ _id: idMongoose }, {
        $pull: {
          usersId: {
            userId,
          },
        },
      });
    } else {
      await MyList.deleteOne({ _id: idMongoose });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    throw new Error(err.message);
  }
};

export {
  addItemToMyList,
  deleteItemFromMyList,
  getItemFromMyList,
  getItemsFromMyList,
  updateItemFromMyList,
};
