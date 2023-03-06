import React, { useState } from 'react';

const data = {
    title: "",
    notes: ""
}

const StickyNotes = () => {

    const [allNotes, setAllNotes] = useState(data);
    const [allNotesList, setAllNotesList] = useState([]);
    const [openButton, setOpenButton] = useState(false);

    const handleInput = (e) => {
        const { name, value } = e.target;
        setAllNotes({ ...allNotes, [name]: value })
    }

    const addNotes = (e) => {
        e.preventDefault();
        setAllNotesList([...allNotesList, allNotes])
        setAllNotes(data)
    }
    const modalDisplay = () => {
        setOpenButton(true);
    }
    const deleteNote = (e) => {
        console.log(e);
        setAllNotesList(allNotesList.filter((item, index) => {
            return index !== e;
        }))
    }

    console.log(allNotesList)

    return (
        <>
            <section className='fluid-container'>
                <nav class="navbar navbar-light bg-warning">
                    <a className="navbar-brand" href="/">Navbar</a>
                </nav>
                <div className="container my-5 ">
                    <div className=" d-flex flex-column align-items-center text-center mt-5 " width="200px">
                        <form action="" className='d-flex justify-content-center' >
                            <div className="border shadow d-flex flex-column justify-content-center position-relative" width="200px">

                                {openButton ?
                                    <input className="border-0" type="text" name="title" placeholder='title' onChange={handleInput} value={allNotes.title} /> : null}

                                <textarea className='border-0' name="notes" id="notesTextarea" cols="50" rows="5" placeholder='make your notes...' onChange={handleInput} value={allNotes.notes} onClick={modalDisplay}> </textarea>
                            </div>
                            {openButton ? <button className=' btn btn-primary m-auto  text-end me-0' onClick={addNotes}> + </button> : null}
                        </form>
                    </div>
                    <div className="row">
                        {allNotesList.map((e, i) => {
                            return <div className="col-md-3 border m-1 bg-warning " key={i}>
                                <h1>{e.title}</h1>
                                <p className='text-break'>{e.notes}</p>
                                <button className='btn btn-danger text-end' onClick={() => deleteNote(i)}>Delete</button>
                            </div>
                        })}
                    </div>
                </div>

            </section>
        </>
    )
}

export default StickyNotes