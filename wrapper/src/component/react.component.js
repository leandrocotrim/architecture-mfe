angular.module('app').component('react', {
  template: `
    <div id="root"></div>
    `,
  controller: function ($state) {
    ReactDOM.render(
      React.createElement(
        ContainerReact,
        {
          content: 'Sou um componente em ReactJS, Click para ir para chamar a rota "about" do AngularJS',
          callback: function () {            
            $state.go('about');         
          }
        },
        null
      ),
      document.getElementById('root')
    );
  }
});

class ContainerReact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement(
      'div',
      {  onClick: () => this.props.callback() },      
      React.createElement(
        'p', { style: { cursor: 'pointer' } }, this.props.content
      )      
    );
  }
}
