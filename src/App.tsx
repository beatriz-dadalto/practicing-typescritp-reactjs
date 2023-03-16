import { useState } from 'react';
import './App.css';

// props on components = type
// shape an object = interface

type TitleProps = {
  text: string;
};

interface Title {
  text: string;
}

const Title = ({ text }: Title) => {
  return <h1>{text}</h1>;
};

type ContentProps = {
  children: React.ReactNode;
  size?: 'small' | 'large';
};

type TypographyPros = {
  color: string;
};

const Content = ({ children, size, color }: ContentProps & TypographyPros) => {
  return (
    <p style={{ fontSize: size === 'small' ? '1.5rem' : '3rem', color }}>
      {children}
    </p>
  );
};

const contentDefaultProps = {
  size: 'small',
};

Content.defaultProps = contentDefaultProps;

const user = {
  id: 1,
  name: 'John Doe',
  age: 30,
  isAdmin: true,
  birthDate: new Date('1980-01-25'),
};

type UserAttributes = typeof user;

const bia: UserAttributes = {
  id: 2,
  name: 'Bia',
  age: 32,
  isAdmin: false,
  birthDate: new Date('1990-05-25'),
};

// inference
function sumNumbers(a: number, b: number) {
  return a + b;
}

// generics = make smart function and components
function List<ItemType>({
  items,
  render,
}: {
  items: ItemType[];
  render: (item: ItemType, index: number) => React.ReactNode;
}) {
  return (
    <ul>
      {items.map((item, index) => {
        return render(item, index);
      })}
    </ul>
  );
}

function App() {
  const [count, setCount] = useState<number | null>(null);

  if (count !== null) {
    return <div>{count}</div>
  }

  const items = [
    {
      id: 1,
      name: 'bia',
    },
    {
      id: 2,
      name: 'beatriz',
    },
  ];

  return (
    <div className="App">
      <Title text="Hello World, Beatriz!" />
      <Content size="small" color="tomato">
        <h5>
          Testing, <b>Content!</b>
        </h5>
      </Content>

      <List
        items={items}
        render={(item, index) => {
          if (item.id === 1) {
            return <p>{item.name}</p>;
          }

          return <h3>{item.name}</h3>;
        }}
      />
    </div>
  );
}

export default App;
