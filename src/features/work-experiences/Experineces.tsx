interface Props {
    title: string
    description: string
}

const Experineces = ({title, description}: Props) => {
  return (
    <div className="card shadow-sm rounded border-0">
      <div className="card-body">
        <div className="card-title">
            {title}
        </div>
        <div className="card-text">
            {description}
        </div>
      </div>
    </div>
  )
}

export default Experineces
