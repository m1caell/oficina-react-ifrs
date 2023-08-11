export default function Image({ src }) {
  return (
    <img
      src={src || 'https://via.placeholder.com/400'}
      alt="Imagem do status code"
    />
  );
}
