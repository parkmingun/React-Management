import './App.css';
import Customer from './components/Customer';

const customers = [
  {
    id:1,
    image: 'http://placeimg.com/128/128/1',
    name : '홍길동',
    birthday : '901020',
    gender : '남자',
    job : '직장인'
  },
  {
    id:2,
    image: 'http://placeimg.com/128/128/any2',
    name : '박민건',
    birthday : '930320',
    gender : '남자',
    job : '직장인'
  },
  {
    id:3,
    image: 'http://placeimg.com/128/128/any3',
    name : '김남길',
    birthday : '950202',
    gender : '남자',
    job : '직장인'
  }
]

function App() {
  return (
    <div>
          {
            customers.map(c =>{
              return (
                <Customer 
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
                />
              )
            })
          }
    </div>
    
  );
}

export default App;
