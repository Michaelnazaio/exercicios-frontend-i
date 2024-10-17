import "./ListaProdutos.css";


const ListaProdutos = (props) => {

  return (
    <>
      <div className="listaProdutos">
        <ul>
          {props.produtos.map((item, index) => {
            return <li>{item.nome}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default ListaProdutos;

