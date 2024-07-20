export default function Card(props) {
  return (
    <div className="bg-white overflow-hidden hover:-translate-y-1 hover:scale-105 duration-300 ease-in-out hover:cursor-pointer" onClick={props.onClick}>
      <img src={props.image_url ? props.image_url : "https://via.placeholder.com/400" } alt="Card Image" className="w-full h-48 object-cover" />
      <div className="py-2">
          {/* <h2 className="text-md font-medium">{props.project_name}</h2>
          <p className="text-sm">Framework: Laravel & Bootstrap 5</p> */}
          {/* <p className="text-gray-600">This is a description for the first card. It provides some details about the content of the card.</p> */}
          {/* <a href="#" className="inline-block mt-4 text-blue-500 hover:underline">Read more</a> */}
      </div>
    </div>
  )
}