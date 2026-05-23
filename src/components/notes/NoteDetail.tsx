import type { Note } from "@/types"


type NoteDetailProps = {
    note: Note
}


export default function NoteDetail({ note }: NoteDetailProps) {
    return (
        <div className="p-3 flex justify-between items-center">
            <p>
                {note.content} por: <span className="font-bold">{note.createdBy.name}</span>
            </p>
        </div>
    )
}
