export default function Button(props: { text: string, link?: string }) {
  return (
    <a href={props.link}>
      <button  className="bg-red-800 rounded text-white p-5 hover:bg-red-400 hover:text-black transition-all">
        {props.text}
      </button>
    </a>
  );
}
