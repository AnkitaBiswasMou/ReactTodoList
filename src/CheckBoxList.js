import React, { Component } from 'react';
class CheckBoxList extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { totale: 0, currentId: 0 }
    }
    render() {
        return (
            <div>
                Total Checked Value : {this.state.totale}

                {this.props.items.map((item) =>
                    <div key={item.id}>
                        <label>
                            <input id={item.id}
                                type="checkbox"
                                onChange={this.handleChange}
                            />
                            {item.name}
                        </label>
                    </div>
                )}
            </div>
        )
    }

    handleChange(event) {
        //const target = event.target;
        const targetId = event.target.id;
        this.props.items[targetId].checked = event.target.checked;
        var totalValue = 0;
        console.log(this.props.count);
        for (var i = 0; i < this.props.count; i++) {

            var currentItemValue = this.props.items[i].checked ? 1 : 0
            totalValue = totalValue + currentItemValue
        }
        this.setState({ totale: totalValue })
    }
}

export default CheckBoxList;
