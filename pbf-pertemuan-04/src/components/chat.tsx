import exp from "constants";
import { useState } from "react";

const contacts = [
    {name: 'Taylor', email: 'taylor@mail.com'},
    {name: 'Alice', email: 'alice@mail.com'},
    {name: 'Bob', email: 'bob@mail.com'},
]

export function ContactList({selectedContac, contacts, onSelect}: any) {
    return (
        <section className="contact-list">
            <ul className="w-full">
                {contacts.map(contact =>
                    <li key={contact.email}>
                        <button className="text-xs bg-blue-400 rounded p-1 m-2 text-white"
                            onClick={() => {onSelect(contact)}}>
                                {contact.name}
                            </button>
                    </li>)}
            </ul>
        </section>
    )
}

export function Chat({contact}: any) {
    const [text, setText] = useState('')
    return (
        <section className="chat m-2">
            <textarea
            rows={5}
            value={text}
            placeholder={'Mengobrol dengan ' + contact.name}
            onChange={e => setText(e.target.value)}/>
            <br />
            <button className="text-xs bg-gray-400 rounded px-2 py-1 m-2 text-blue-800">
                Kirim ke {contact.email}
            </button>
        </section>
    )
}

export default function Messenger() {
    const [to, setTo] = useState(contacts[0])
    return (
        <div>
            <table className="w-1/2 text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs"></thead>
            </table>
        </div>
    )
}