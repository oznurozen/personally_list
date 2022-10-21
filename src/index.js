import './index.css';
import ReactDom from "react-dom";

const Person = ({img, name, job,children}) =>{
  const url =`https://randomuser.me/api/portraits/thumb/men/${img}.jpg`
  return(
   
    <article className='person'>
      <img src={url} alt="person"/>
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}

    </article>
  );
};

const PersonList = () =>{
  return(
    <section className='person-list'>
      <Person img="34" name="Oznur" job="yazilimci"/>
      <Person img="30" name="Suleyman" job="Developer">
      <p>Hakkımda
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis harum facilis velit excepturi veniam? Dolorum deserunt voluptates expedita repellendus ab!</p>
      </Person>
      <Person img="20" name="Kamil" job="The Boss"/>
    </section>
  );
};

ReactDom.render(<PersonList/>, document.getElementById("root"));



