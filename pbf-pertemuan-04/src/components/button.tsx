export default function Tombol_1() {
    function handleClick() {
        alert('Tombol telah ditekan!!!');
    }

    function handleMouseOver() {
        alert('Click Me!!!')
    }
    return (
        <button className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded" 
        onClick={handleClick} 
        //onMouseOver={handleMouseOver}
        onMouseLeave={() => {
            alert("No!!!")
        }}
        >
            Tombol 1
        </button>
    )
}

export function Tombol_2({isiPesan, namaTombol}: any) {
    return (
        <button className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
        onClick={() => alert(isiPesan)}>
            {namaTombol}
        </button>
    )
}
