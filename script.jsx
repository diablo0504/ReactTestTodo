
















var TodoInput =React.createClass({
    onSubmit:function (e) {
    e.preventDefault();
    this.props.addItem(this.refs.name.value,this.refs.level.value);
    this.refs.name.value='';
    this.refs.level.value='';
  },
    render:function(){
        return(
             <form className='todo-input' onSubmit={this.onSubmit}>
                名稱:<input type='text'  ref='name' />&nbsp;&nbsp;
                等級:<input type='text'  ref='level' style={{ width: '120px' } }/>&nbsp;
                <button>新增</button>
            </form>
        );
    }
});

var TodoItem =React.createClass({
   getDefaultProps: function() {
    return {
        children:'',
    };
  },
  render: function(){
    var className='';
    return(
      <li className={className} style={{ textAlign: 'center' } } >
        {this.props.children}
      </li>
    )
  }
});



var TodoList =React.createClass({
    render:function(){
        var toggleDone= this.props.toggleDone;
        return(
           <ul className='todo-list'>
               {
                   this.props.data.map(function(item){
                       return(
                           <TodoItem key={item.id} id={item.id} >
                              {item.text} &nbsp; &nbsp;
                              {item.level}
                           </TodoItem>
                       )
                   })
               }
           </ul>
        );
    }
});




var Todo = React.createClass({
    getDefaultProps:function(){
        return{
           initialdata:[],
        };
    },
    getInitialState:function(){
        return{
            data:this.props.initialdata,
        };
    },
    addItem:function(text,level){
        var id = this.state.data.length + 1;
        var newData = this.state.data.concat({
          id:id,
          text:text,
          level:level,
    });
    this.setState({data:newData});
  },
    render:function(){
      return(
          <div className='todo'>
            
              <div>&nbsp;</div>
              <TodoInput addItem={this.addItem}/>
              <TodoList data={this.state.data} />
          </div>
      );
    }
});

var dataArray = [
  {id:1  , text:'火龍' ,level:'21'},
  {id:2  , text:'妙娃' ,level:'33'},

];

ReactDOM.render(
    <Todo initialdata={dataArray}/>,
    document.getElementById('content')
);