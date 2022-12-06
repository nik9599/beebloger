import './write.css'


export default function Write() {
    return (
        <div className='Write'>
            <form className="writeform">
                <div className="writeformgroup">
                    <label htmlFor="fileinput" className="fileinput">
                        <i class="fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id="fileinput" style={{ display: 'none' }} />
                    <input type='text' placeholder='Enter the title' autoFocus={true}
                        className='writeinput' />
                </div>

                <div className="writeformgroup">
                    <textarea placeholder='Tell Your Story' type='text' className='writeinput writetext' />
                
                </div>
               
                <button className="writesubmit">Publish</button>

            </form>
        </div>
    )
}
