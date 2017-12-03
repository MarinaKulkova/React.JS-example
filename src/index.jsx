import React from "react"
import ReactDOM from "react-dom"
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import  MdAccessTime from 'react-icons/lib/md/access-time'
import FileIcon from 'react-icons/lib/go/file-text'

injectTapEventPlugin();

class EssayForm extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        value: '',
        noteList: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        if (this.state.value !== '') {
            let note = {
                value: this.state.value,
                time: this.props.time
            }
            this.state.noteList.unshift(note);
            this.setState({noteList: this.state.noteList, value: ''});
        }
    }

    renderClockIcon(style) {
        return (<MdAccessTime style={style}/>)
    }

    renderFileIcon(style) {
        return (<FileIcon style={style}/>)
    }

    renderClock = () => {
        return (
            <div>
                {this.renderClockIcon(this.styles.iconStyle_1)}
                <div style={this.styles.timeStyle}>
                    {this.props.time}
                </div>
            </div>
        )
    }

    handleSubmit(event) {
        if (this.state.value !== '') {
            let note = {
                value: this.state.value,
                time: this.props.time
            }
            this.state.noteList.unshift(note);
            this.setState({noteList: this.state.noteList, value: ''});
        }
    }

    renderNoteList = () => {
        if (this.state.noteList)
            return this.state.noteList.map((item, index) => {
                return (
                    <Paper key={index} style={this.styles.marginStyle_1}>
                        <span>{this.renderClockIcon(this.styles.iconStyle_2)}</span>
                        <span style={this.styles.textStyle_1}>{item.time}</span>
                        <span>{this.renderFileIcon(this.styles.iconStyle_2)}</span>
                        <span style={this.styles.textStyle_2}>{item.value}</span>
                    </Paper>
                )
            });
        return null;
    }

    styles = {
        paperStyle: {
            width: 600,
            minHeight: 700,
            textAlign: 'center',
            padding: 16
        },
        textFieldStyle: {
            marginLeft: 20
        },
        timeStyle: {
            marginTop: 10,
            marginBottom: 20,
            color: 'gray',
            fontSize: '30px'
        },
        iconStyle_1: {
            fill: 'cadetblue',
            fontSize: '30px',
            marginTop: 20
        },
        iconStyle_2: {
            fill: 'cadetblue',
            fontSize: '20px',
            marginLeft: 10,
            marginRight: 5
        },
        iconStyle_3: {
            fill: 'cadetblue',
            fontSize: '30px',
            marginRight: 15
        },
        marginStyle_1: {
            marginBottom: 10,
            textAlign: 'left'
        },
        textStyle_1: {
            color: 'gray',
            fontWeight: 500,
            marginRight: 10
        },
        textStyle_2: {
            whiteSpace: 'pre-wrap'
        }
    }

    render() {
        return (
            <MuiThemeProvider>
                <Paper style={this.styles.paperStyle} zDepth={2}>
                    <div>{this.renderClock()}</div>
                    <span>{this.renderFileIcon(this.styles.iconStyle_3)}</span>
                    <TextField
                        id="text"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                    <RaisedButton
                        label="Добавить"
                        onClick={this.handleSubmit}
                        primary={true}
                        style={this.styles.textFieldStyle}
                    />
                    <div style={{backgroundColor: 'aliceblue'}}>{this.renderNoteList()}</div>
                </Paper>
            </MuiThemeProvider>
        );
    }
}


/**
 * Отображение класса EssayForm на элементе с id = "content"
 */
function tick() {

    ReactDOM.render(
        <EssayForm time={new Date().toLocaleTimeString()}/>,
        document.getElementById("content")
    );
}

/**
 *  Перерисовка содержимого элемента с id = "content" с интервалом в 1 секунду
 */
setInterval(tick, 1000);


