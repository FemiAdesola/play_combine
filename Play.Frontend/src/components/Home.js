// import React, { Component, Fragment } from 'react';
// import { Link } from 'react-router-dom';
// import authService from './api-authorization/AuthorizeService';
// import { ApplicationPaths } from './Constants';

// export class Home extends Component
// {
//   static displayName = Home.name;

//   constructor(props)
//   {
//     super(props);

//     this.state = {
//       isAuthenticated: false,
//       userName: null,
//       role: null
//     };
//   }

//   componentDidMount()
//   {
//     this._subscription = authService.subscribe(() => this.populateState());
//     this.populateState();
//   }

//   componentWillUnmount()
//   {
//     authService.unsubscribe(this._subscription);
//   }

//   async populateState()
//   {
//     const [isAuthenticated, user] = await Promise.all([authService.isAuthenticated(), authService.getUser()])
//     this.setState({
//       isAuthenticated,
//       userName: user && user.name,
//       role: user && user.role
//     });
//   }

//   render()
//   {
//     return (
//       <div>
//         <h1>Play Economy</h1>
//         <p>Welcome to the Play Economy website, a cloud native virtual economy system.</p>
//         <p>To get started, yout can:</p>
//         <ul>
//           <li>Visit the <Link to={ApplicationPaths.StorePath}>Store</Link></li>
//           <li>Check your <Link to={ApplicationPaths.InventoryPath}>Inventory</Link></li>
//           {this.adminView()}
//         </ul>
//         <p>You can also</p>
//         <ul>
//           <li>Manage the <a href={window.RABBITMQ_URL} target="_blank" rel="noreferrer">message queues</a></li>
//           <li>Explore the Open API documentation:
//             <ul>
//               <li><a href={`${window.CATALOG_SERVICE_URL}/swagger`} target="_blank" rel="noreferrer">Catalog service</a></li>
//               <li><a href={`${window.INVENTORY_SERVICE_URL}/swagger`} target="_blank" rel="noreferrer">Inventory service</a></li>
//               <li><a href={`${window.IDENTITY_SERVICE_URL}/swagger`} target="_blank" rel="noreferrer">Identity service</a></li>
//               <li><a href={`${window.TRADING_SERVICE_URL}/swagger`} target="_blank" rel="noreferrer">Trading service</a></li>
//             </ul>
//           </li>
//         </ul>


//         <p>This website was built with:</p>
//         <ul>
//           <li>Manage the <a href={window.RABBITMQ_URL} target="_blank" rel="noreferrer">message queues</a></li>
//           <li>Explore the Open API documentation:
//             <ul>
//               <li><a href="https://dotnet.microsoft.com/en-us/apps/aspnet" target="_blank" rel="noreferrer">ASP.NET Core</a>  and <a href="https://dotnet.microsoft.com/en-us/learn/dotnet/what-is-dotnet" target="_blank" rel="noreferrer">C#</a> for cross-platform server-side code</li>
//               <li><a href="https://www.docker.com/#build" target="_blank" rel="noreferrer">Docker </a>for services containerization</li>
//               <li><a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">MongoDB </a>for database storage</li>
//               <li><a href="https://www.rabbitmq.com/" target="_blank" rel="noreferrer">RabbitMQ </a>and <a href="https://masstransit.io/" target="_blank" rel="noreferrer">MassTransit</a> for message-based asynchronous communication</li>
//               <li><a href="https://react.dev/" target="_blank" rel="noreferrer">React </a>for client-side rendering and <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer">Bootstrap</a> for layout and styling</li>
//             </ul>
//           </li>
//         </ul>
//       </div>
//     );
//   }

//   adminView()
//   {
//     if (this.state.isAuthenticated && this.state.role === "Admin")
//     {
//       return (<Fragment>
//         <li>Manage the <Link to={ApplicationPaths.CatalogPath}>Catalog</Link></li>
//         <li>Manage registered <Link to={ApplicationPaths.UsersPath}>Users</Link></li>
//       </Fragment>);
//     }
//   }
// }


import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import authService from './api-authorization/AuthorizeService';
import { ApplicationPaths } from './Constants';

export class Home extends Component
{
  static displayName = Home.name;

  constructor(props)
  {
    super(props);

    this.state = {
      isAuthenticated: false,
      userName: null,
      role: null
    };
  }

  componentDidMount()
  {
    this._subscription = authService.subscribe(() => this.populateState());
    this.populateState();
  }

  componentWillUnmount()
  {
    authService.unsubscribe(this._subscription);
  }

  async populateState()
  {
    const [isAuthenticated, user] = await Promise.all([authService.isAuthenticated(), authService.getUser()])
    this.setState({
      isAuthenticated,
      userName: user && user.name,
      role: user && user.role
    });
  }

  render()
  {
    return (
      <div>
        <h1>Play Economy</h1>
        <p>Welcome to the Play Economy website, a cloud native virtual economy system.</p>
        <p>To get started, yout can:</p>
        <ul>
          <li>Visit the <Link to={ApplicationPaths.StorePath}>Store</Link></li>
          <li>Check your <Link to={ApplicationPaths.InventoryPath}>Inventory</Link></li>
          {this.adminView()}
        </ul>
        <p>You can also</p>
        <ul>
          <li>Manage the <a href={window.RABBITMQ_URL} target="_blank" rel="noreferrer">message queues</a></li>
          <li>Explore the Open API documentation:
            <ul>
              <li><a href={`${window.CATALOG_SERVICE_URL}/swagger`} target="_blank" rel="noreferrer">Catalog service</a></li>
              <li><a href={`${window.INVENTORY_SERVICE_URL}/swagger`} target="_blank" rel="noreferrer">Inventory service</a></li>
              <li><a href={`${window.IDENTITY_SERVICE_URL}/swagger`} target="_blank" rel="noreferrer">Identity service</a></li>
              <li><a href={`${window.TRADING_SERVICE_URL}/swagger`} target="_blank" rel="noreferrer">Trading service</a></li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }

  adminView()
  {
    if (this.state.isAuthenticated && this.state.role === "Admin")
    {
      return (<Fragment>
        <li>Manage the <Link to={ApplicationPaths.CatalogPath}>Catalog</Link></li>
        <li>Manage registered <Link to={ApplicationPaths.UsersPath}>Users</Link></li>
      </Fragment>);
    }
  }
}
