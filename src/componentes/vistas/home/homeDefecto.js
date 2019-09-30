import React from 'react';

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

export default HomeDefecto;
