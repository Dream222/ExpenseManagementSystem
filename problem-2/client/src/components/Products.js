import React from 'react';
import { browserHistory } from 'react-router';
// import ReactTable from "react-table";
// import "react-table/react-table.css";
// import './css/login.css'
// import TableComponent from "./table/tableComponent";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { FormGroup, ControlLabel, FormControl, Button, Navbar } from 'react-bootstrap';



class ActiveFormatter extends React.Component {
    render() {
        return (
            <input type='checkbox' checked={this.props.active} />
        );
    }
}

function activeFormatter(cell, row) {
    return (
        <ActiveFormatter active={cell} />
    );
}
export default class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            data: [{ Toms: 23423, jack: 423423 }]
        }
    }
    componentDidMount() {
        const currentUser = this.props.user;
        try {
            if (currentUser.status === 200) {
                const user = currentUser.user;
                this.setState({ username: user.username });
                localStorage.setItem('user', JSON.stringify(user));
            } else {
                const userString = localStorage.getItem('user');
                if (userString) {
                    this.setState({ username: JSON.parse(userString).username });
                    this.props.mappedproductGetList();
                } else {
                    browserHistory.push('/login');
                }
            }
        } catch (err) {
            browserHistory.push('/login');
        }
    }
    getProps(data) {
        if (data.status === 200) {
            console.log(data.products)
        }
    }
    componentWillReceiveProps(nextProps) {
        this.getProps(nextProps.productArray);
    }

    createCustomModalHeader(onClose, onSave) {
        const headerStyle = {
            fontWeight: 'bold',
            fontSize: 'large',
            textAlign: 'center',
            backgroundColor: '#eeeeee'
        };
        return (
            <div className='modal-header' style={headerStyle}>
                <h3>That is my custom header</h3>
                <button className='btn btn-info' onClick={onClose}>Close it!</button>
            </div>
        );
    }

    render() {
        const options = {
            // insertModalHeader: this.createCustomModalHeader,
            page: 2,
            sizePerPageList: [{
                text: '5', value: 5
            }, {
                text: '10', value: 10
            }],
            sizePerPage: 5,
            pageStartIndex: 1,
            paginationSize: 3,
            prePage: 'Prev',
            nextPage: 'Next',
            firstPage: 'First',
            lastPage: 'Last',
            paginationShowsTotal: this.renderShowsTotal,

        };
        function indexN(cell, row, enumObject, index) {
            return (<div>{index + 1}</div>)
        }
        var selectRowProp = {
            mode: "checkbox",
            clickToSelect: true,
            bgColor: "rgb(238, 193, 213)"
        };
        var style={
            backgroundColor:"#2b2b2be6"
        }
        return (
            <div className="expenseList">
                <Navbar style={style}>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/">Home</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                </Navbar>
                <div className="Home">
                    <p>&nbsp;</p><br/>
                    <h1>Expense List</h1>
                    <h3 id="main">User : {this.state.username}</h3>
                    <BootstrapTable data={this.props.productArray.products}
                        options={options}
                        pagination
                        hover
                    >
                        <TableHeaderColumn dataField="any" dataFormat={indexN} dataAlign='center' width='5%'>No</TableHeaderColumn>
                        <TableHeaderColumn dataField='_id' isKey={true} width='30%' className="sssid">Product ID</TableHeaderColumn>
                        <TableHeaderColumn dataField='username' width='30%'>Product Name</TableHeaderColumn>
                        <TableHeaderColumn dataField='email' width='30%'>Product Price</TableHeaderColumn>
                        <TableHeaderColumn dataField='active' dataFormat={activeFormatter} dataAlign='center'>Active</TableHeaderColumn>

                    </BootstrapTable>
                </div>
            </div>
        );
    }
}
