/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Card from '../../components/Card';
import Spinner from '../../components/Spinner';
import { Container, DivStyled, NoData } from './styles';
import { useDB } from '../../context/DatabaseContext';
import { useAuth } from '../../context/AuthContext';

function MyList() {
  const { readAllData, allData } = useDB();
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      navigate('/');
      return;
    }

    readAllData()
      .then(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Header position="fixed" />
      <main>
        <Container>
          <h1>Mi Lista</h1>
          <p>Mis películas y series</p>
          {loading ? (
            <Spinner />
          ) : (
            allData.length === 0
              ? (<NoData>No ha añadido películas ni series a su lista</NoData>)
              : (
                <DivStyled quantity={allData.length >= 4 ? 'space-between' : 'normal'}>
                  {allData.map((item) => (
                    <Card key={item.id} item={item} type={item.type} />
                  ))}
                </DivStyled>
              )
          )}
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default MyList;
