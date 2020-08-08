import React, { Fragment, useState, useEffect } from 'react';
import Intro from './components/Intro';
import Navbar from './components/Navbar'
import Formulario from './components/Formulario';
import Letra from './components/Letra';
import ArtistaInfo from './components/ArtistaInfo';
import Axios from 'axios';

function App() {
   
  //state de busqueda de las letras
  const [busquedaletra, setBusquedaLetra] = useState({});

  //state para manipular la letra de la cancion
  const [letra, setLetra] = useState('');

  //state para la informacion del artista
  const [artistainfo, setArtistaInfo] = useState('');

  useEffect(() => {
    if(Object.keys(busquedaletra).length === 0) return;

    const consultarAPIlyrics = async () => {

      const { artista, cancion } = busquedaletra;

      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;

      const url2 = `https://theaudiodb.com/api/v1/json/1/search.php?s=coldplay&s=${artista}`;

      //dos consultas al mismo tiempo
      const [letra, informacion] = await Promise.all([
        Axios(url),
        Axios(url2)
      ]);

      setLetra(letra.data.lyrics);
      setArtistaInfo(informacion.data.artists[0]);

    }
    consultarAPIlyrics();
  }, [busquedaletra, artistainfo])

  return (
    <Fragment>
      <Navbar />
      <Intro />
      <Formulario 
        setBusquedaLetra = {setBusquedaLetra}
      />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <ArtistaInfo 
              artistainfo = {artistainfo}
            />
          </div>
          <div className="col-md-6">
            <Letra 
              letra = {letra}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
