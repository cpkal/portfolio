export default function Card(props) {
  return (
    <div className="bg-secondary overflow-hidden hover:-translate-y-1 hover:scale-105 duration-300 ease-in-out hover:cursor-pointer" onClick={props.onClick}>
      <img src={props.thumbnail_url } alt="Card Image" className="h-64 text-center mx-auto p-7" />
    </div>
  )
}