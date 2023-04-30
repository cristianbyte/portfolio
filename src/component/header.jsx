import './header.css'

export default function Header(){
    return(
        <div className='header'>
            <div className="me__photo">
                <img src="https://avatars.githubusercontent.com/u/61919822?v=4" alt="avatar from www" />
            </div>
            <p className="me__greeting">
                Hi, I'm Cristian 👋  
            </p>
            <h1 className="me__call">    
                Being <span className='me__different'> different </span> and <span className='me__different'> memorable </span> on the internet.
            </h1>
            <div className="me__contact">
                <button >Contact me</button>
            </div>
        </div>
    )
}