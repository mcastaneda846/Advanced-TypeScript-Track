import { Card } from "./components/Card";
import { Badge } from "./components/Badge";
import { Button } from "./components/Button";

function App() {
  return (
    <div
      style={{
        padding: "30px",
        backgroundColor: "white",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      <h1 style={{ color: "#607274" }}>Productos</h1>

      {/* CARD 1 */}
      <Card
        title="Producto Nuevo"
        type="white"
        imageUrl="https://i.blogs.es/3f45c4/pcpotente-ap/1366_2000.jpeg"
        footer={<Button text="Comprar" size="lg" />}
      >
        <Badge label="Nuevo" status="success" />
      </Card>

      {/* CARD 2 */}
      <Card
        title="Producto en oferta"
        type="green"
        imageUrl="https://compucellservice.com/wp-content/uploads/2024/12/Celular-Apple-iPhone-14-png1.png"
        footer={<Button text="Ver oferta" variant="secondary" />}
      >
        <Badge label="Oferta" status="warning" />
      </Card>

      {/* CARD 3 */}
      <Card
        title="Producto eliminado"
        type="black"
        imageUrl="https://programacion.net/files/article/20161110041116_image-not-found.png"
        footer={<Button text="Eliminar" variant="danger" />}
      >
        <Badge label="Error" status="error" />
      </Card>
    </div>
  );
}

export default App;
