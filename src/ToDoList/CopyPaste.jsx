import React from 'react'

const CopyPaste = () => {

const copyTextFunction=(e)=>{
    let text=e.target.innerText;

    // text.select();
    navigator.clipboard.writeText(text);
    alert( text)
console.log(e);

}

  return (
    <>
    <section className='m-5 text-center'>
    <div className="card border-0 copyPaste">
        <h1 className='text-decoration-none cursor-pointer' onClick={copyTextFunction}> Sagar Tilekar</h1>
    </div>
        <input type="text" className='mt-5'/>
    </section>
    </>
  )
}

export default CopyPaste