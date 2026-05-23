import type { Task } from "@/types";
import AddNoteForm from "./AddNoteForm";
import NoteDetail from "./NoteDetail";

type NotesPanlesProps = {
  notes: Task['notes']
}

export default function NotesPanels({ notes }: NotesPanlesProps) {
  console.log(notes)
  return (
    <>
      <AddNoteForm />

      <div className="divide-y divide-gray-100 mt-10">
        {notes.length > 0 ?(
          <>
            <p className="font-bold text-2xl text-slate-600 my-5 ">Notas: </p>
            {notes.map(note => <NoteDetail/>)}
          </>
        ) : <p className='text-gray-500 text-center pt-3'>No hay notas</p>}
      </div>
    </>
  )
}
