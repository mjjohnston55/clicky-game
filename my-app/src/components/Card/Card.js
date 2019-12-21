import React from "reaect";
import "./Card.ss";

const Card = props => (
    <div class="card" onClick= {() => props.counter(props.id)}>
        <div class="card-img">
            <img alt={props.name} src={props.image} />
        </div>
    </div>
);

export default Card;