export default function Button({ text }: { text: string }) {
  return (
    <button className="bg-red-800 rounded text-white p-5 hover:bg-red-400 hover:text-black transition-all">
      {text}
    </button>
  );
}
