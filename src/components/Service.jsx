const Service = ({ id, icon, title, text, onRemove }) => {

  const handleDelete = () => onRemove(id);

  return (
    <article className='service'>
      <span className='service-icon'>
        <i className={icon}></i>
      </span>
      <div className='service-info'>
        <h4 className='service-title'>{title}</h4>
        <p className='service-text'>{text}</p>
        <button className="btn remove-btn" onClick={handleDelete}>Remove</button>
      </div>
    </article>
  )
}
export default Service