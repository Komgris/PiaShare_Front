import React from 'react'
import MemberPanel from './MemberPanel';

export default function MainRoom() {
    return (
        <div className="container">
            <div className="badge-room">
                #ROOM1
            </div>
            <div className="room-border">
                <div className="row">
                    <div className="col-sm-3">
                        <MemberPanel></MemberPanel>
                    </div>
                </div>
            </div>
        </div>
    )
}
