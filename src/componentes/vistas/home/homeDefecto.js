import React from 'react';

//Redux
import { connect } from 'react-redux';

function HomeDefecto({ titulo }) {
    return (
        <div className="page-header">
            <div className="page-block">
                <div className="row align-items-center">
                    <div className="col-md-12">
                        <div className="page-header-title">
                            <h5 className="m-b-10">{titulo}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        titulo: state.app.titulo
    }
}

export default connect(mapStateToProps)(HomeDefecto);
