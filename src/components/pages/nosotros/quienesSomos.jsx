import { Card } from "react-bootstrap";
import "./quienesSomos.css";
import { CardContent } from "@mui/material";

const QuienesSomos = () => {
  return (
    <div className="contenedorTotal2">
      <div className="contenedorTitulo">
        <img
          className="titulo"
          src="https://firebasestorage.googleapis.com/v0/b/logincor-f1fb5.appspot.com/o/titulooo-06.png?alt=media&token=351856de-5cd1-4dad-b3c2-b45895eb0b1e"
          alt=""
        />
      </div>

      <div className="contenedorCards2">
        <div className="cardGeneral2">
          <div className="conteTextos">
            <h1 className="texto1">
              En Logincor ofrecemos servicios de transporte y logística de
              primera calidad en todo el país con más 30 años de experiencia en
              el sector. Hemos construido una reputación sólida basada en la
              confiabilidad, la eficiencia y la seguridad de nuestros servicios.
            </h1>
          </div>
          <div className="cardCard2">
            <div className="imagenCard2">
              <img
                className="imgImg2"
                src="https://firebasestorage.googleapis.com/v0/b/logincor-f1fb5.appspot.com/o/mision.png?alt=media&token=07485978-5a0d-49c0-8321-e1b1f389e265"
                alt=""
              />
            </div>

            <CardContent className="contenedorTextosNosotros">
              <h2 className="texto2">Misión</h2>
              <h3 className="texto3">
                En Logincor nuestra misión es proporcionar servicios de
                transporte y logística de alta calidad en todo el país. Nos
                comprometemos a garantizar entregas rápidas, seguras y
                eficientes, apoyados en una flota moderna y un equipo humano
                altamente capacitado. Nuestro objetivo es superar las
                expectativas de nuestros clientes, ofreciendo soluciones
                personalizadas y un servicio excepcional.
              </h3>
            </CardContent>
          </div>
          <Card className="cardCard2">
            <div className="imagenCard2">
              <img
                className="imgImg2"
                src="https://firebasestorage.googleapis.com/v0/b/logincor-f1fb5.appspot.com/o/vision.png?alt=media&token=c2cc1596-44c3-4a14-a358-0de3545ec854"
                alt=""
              />
            </div>

            <CardContent className="contenedorTextosNosotros">
              <h2 className="texto2">Visión</h2>
              <h3 className="texto3">
                Nuestra visión es ser la empresa líder en transporte y logística
                en Argentina, reconocida por nuestra confiabilidad, innovación y
                excelencia en el servicio. Aspiramos a crecer y adaptarnos
                continuamente a las necesidades cambiantes del mercado,
                implementando tecnologías de vanguardia y prácticas sostenibles.
                Queremos ser el socio preferido de nuestros clientes,
                destacándonos por nuestra capacidad de respuesta y nuestra
                dedicación a la seguridad y la integridad de la carga.
              </h3>
            </CardContent>
          </Card>
          <Card className="cardCard2">
            <div className="imagenCard2">
              <img
                className="imgImg2"
                src="https://firebasestorage.googleapis.com/v0/b/logincor-f1fb5.appspot.com/o/valores.png?alt=media&token=f4029d92-dfac-4c18-b6e1-1e646213b493"
                alt=""
              />
            </div>

            <CardContent className="contenedorTextosNosotros">
              <h2 className="texto2">Valores</h2>
              <h3 className="texto5">• Velocidad de Entrega:</h3>
              <h4 className="texto4">
                Nos comprometemos a realizar entregas rápidas y puntuales,
                respetando siempre los plazos acordados.
              </h4>
              <h3 className="texto5">• Velocidad de Respuesta:</h3>
              <h4 className="texto4">
                Nuestro equipo de atención al cliente está disponible para
                responder a sus consultas de manera inmediata y eficiente,
                asegurando que siempre esté informado sobre el estado de su
                envío.
              </h4>
              <h3 className="texto5">• Confianza:</h3>
              <h4 className="texto4">
                La confianza es la base de nuestra relación con los clientes.
                Trabajamos con transparencia y dedicación para que siempre se
                sienta seguro de que su carga está en buenas manos.
              </h4>
              <h3 className="texto5">• Seguridad en la Carga:</h3>
              <h4 className="texto4">
                Implementamos rigurosos protocolos de seguridad para garantizar
                que su mercadería llegue a su destino en perfectas condiciones.
              </h4>
              <h3 className="texto5">• Capital Humano:</h3>
              <h4 className="texto4">
                Nuestro equipo de profesionales altamente capacitados y
                comprometidos se esfuerza día a día por superar las expectativas
                de nuestros clientes, brindando atención personalizada y
                soluciones a medida.
              </h4>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default QuienesSomos;
