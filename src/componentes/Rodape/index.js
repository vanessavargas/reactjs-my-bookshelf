import "./rodape.css";
import facebook from '../../assets/images/facebook.png';
import instagram from '../../assets/images/instagram.png';
import logo from '../../assets/images/logo.png';

const Rodape = () => {
  return (
    <footer className="footer">
      <section>
        <ul>
          <li>
            <a href="facebook.com" target="_blank">
              <img src={facebook} alt="logo do Facebook" />
            </a>
          </li>
          <li>
            <a href="instagram.com" target="_blank">
              <img src={instagram} alt="logo do Instagram" />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img className="rodape__logo" src={logo} alt="logotipo" />
      </section>
      <section>
        <p>Desenvolvido por Vanessa Vargas.</p>
      </section>
    </footer>
  );
};

export default Rodape;
