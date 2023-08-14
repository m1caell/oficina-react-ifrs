export default function Image({ src }) {
  return (
    <img
      className="image"
      src={src || 'https://via.placeholder.com/400'}
      alt="Imagem do status code"
    />
  );
}
