interface Props {
  title: string;
  content: string;
  commentsQty: number;
  tags: string[];
  category: Category;
}

// eslint-disable-next-line react-refresh/only-export-components
export enum Category {
  JS = "Javascript",
  TS = "Typescript",
  P = "Python",
}

const EnumComponent = ({
  title,
  content,
  commentsQty,
  tags,
  category,
}: Props) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Quantidade de comentários: {commentsQty}</p>
      <div>
        {tags.map((tag) => (
          <span>#{tag}</span>
        ))}
      </div>
      <h4>Categoria: {category}</h4>
    </div>
  );
};

export default EnumComponent;
