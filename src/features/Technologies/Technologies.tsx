import DisplayHeading from "../../components/Heading"
import { TechIcon } from "./constant"

const Technologies = () => {
  return (
    <div>
      <DisplayHeading label='Technologies' />
      <div className="container my-4">
        <div className="row d-flex justify-content-center">
          {TechIcon.map((techIcon) =>
            <div key={techIcon.id} className="col-6 col-md-4 col-lg-4 mb-4 d-flex justify-content-center">
              <div
                className="card card-scale shadow"
                style={{
                  width: "200px",
                  height: "200px",
                  borderRadius: "15px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div>{techIcon.icon}</div>
                <p
                  style={{
                    marginTop: "10px",
                    fontSize: "14px",
                    fontWeight: "bold",
                    color: "#555",
                    textAlign: "center",
                  }}
                >
                  {techIcon.name}
                </p>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}

export default Technologies
