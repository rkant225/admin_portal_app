import React from 'react'
import customerImage from '../../Assets/alexander.jpg';

const Dashboard = () => {

    const CARDS = [
        {count : 1604, title : 'Views', iconName : 'eye-outline'},
        {count : 340, title : 'Sales', iconName : 'cart-outline'},
        {count : 9043, title : 'Comments', iconName : 'chatbubbles-outline'},
        {count : '$7892', title : 'Earnings', iconName : 'cash-outline'},
        {count : 4582, title : 'Customers', iconName : 'people-outline'},
    ];

    const DashboardCard = (props)=>{
        const {count, title, iconName} = props;
        return(
            <div className='dashboard-card'>
                <div className='dashboard-card-count-title-container'>
                    <div className='dashboard-card-count'>{count}</div>
                    <div className='dashboard-card-title'>{title}</div>
                </div>
                <div className='dashboard-card-icon-container'>
                    <ion-icon name={iconName}></ion-icon>
                </div>
            </div>
        );
    }

    const getRandomString = ()=>(Math.random() + 1).toString(36).substring(7);
    const getRandomHexColor = ()=>`#${Math.floor(Math.random()*16777215).toString(16)}`;

    const RECENT_ORDERS = [
        {orderName : 'Hitachi - Screen Projector', price : 4000, orderId : getRandomString(), status : 'delivered'},
        {orderName : 'Cooler', price : 4355, orderId : getRandomString(), status : 'transit'},
        {orderName : 'Fan celieng', price : 20000, orderId : getRandomString(), status : 'cancled'},
        {orderName : 'Farrata single stand', price : 1290, orderId : getRandomString(), status : 'delivered'},
        {orderName : 'Motor 2 HP, Single phase', price : 3445, orderId : getRandomString(), status : 'delivered'},
        {orderName : 'Table brown 4 psc', price : 4000, orderId : getRandomString(), status : 'cancled'},
        {orderName : 'Air conditionar', price : 5543, orderId : getRandomString(), status : 'transit'},
        {orderName : 'Bed King size', price : 4000, orderId : getRandomString(), status : 'delivered'},
        {orderName : 'Door bell 40 psc', price : 6544, orderId : getRandomString(), status : 'delivered'},
        {orderName : 'Laptop, Dell 2 psc', price : 4333, orderId : getRandomString(), status : 'transit'},
        {orderName : 'Cooker, United', price : 100, orderId : getRandomString(), status : 'cancled'},
        {orderName : 'Television, 42 inch', price : 5688, orderId : getRandomString(), status : 'transit'},
        {orderName : 'Nokia 6300, 5 psc', price : 4000, orderId : getRandomString(), status : 'delivered'},
        {orderName : 'Cardboard for packing', price : 8900, orderId : getRandomString(), status : 'cancled'},
    ];

    const RECENT_CUSTOMERS = [
        {customerId : getRandomString(), name : 'Rahul', mobile : '9876416884'},
        {customerId : getRandomString(), name : 'Ravi', mobile : '9876416884'},
        {customerId : getRandomString(), name : 'Amit', mobile : '4987616884'},
        {customerId : getRandomString(), name : 'Ajay', mobile : '1987646884'},
        {customerId : getRandomString(), name : 'Rahul', mobile : '1987646884'},
        {customerId : getRandomString(), name : 'Rahul', mobile : '9876416884'},
        {customerId : getRandomString(), name : 'Rohit', mobile : '9876416884'},
        {customerId : getRandomString(), name : 'Rahul', mobile : '662663322'},
        {customerId : getRandomString(), name : 'Rahul', mobile : '3322112233'},
        {customerId : getRandomString(), name : 'Rahul', mobile : '9876416884'},
        {customerId : getRandomString(), name : 'Ravi', mobile : '9876416884'},
        {customerId : getRandomString(), name : 'Amit', mobile : '4987616884'},
        {customerId : getRandomString(), name : 'Ajay', mobile : '1987646884'},
        {customerId : getRandomString(), name : 'Rahul', mobile : '1987646884'},
        {customerId : getRandomString(), name : 'Rahul', mobile : '9876416884'},
        {customerId : getRandomString(), name : 'Rohit', mobile : '9876416884'},
        {customerId : getRandomString(), name : 'Rahul', mobile : '662663322'},
        {customerId : getRandomString(), name : 'Rahul', mobile : '3322112233'},
        {customerId : getRandomString(), name : 'Rahul', mobile : '9876416884'},
        {customerId : getRandomString(), name : 'Ravi', mobile : '9876416884'},
        {customerId : getRandomString(), name : 'Amit', mobile : '4987616884'},
        {customerId : getRandomString(), name : 'Ajay', mobile : '1987646884'},
        {customerId : getRandomString(), name : 'Rahul', mobile : '1987646884'},
    ];

    return (
        <div className='dashboard-page-container'>
            <div className='dashboard-cards-container'>
                {
                    CARDS.map((card)=>{
                        return <DashboardCard count={card.count} title={card.title} iconName={card.iconName}/>
                    })
                }
            </div>
            
            <div className='dashboard-recent-orders-and-recent-customers-container'>
                <div className='dashboard-recent-orders-container'>

                    <div className='dashboard-recent-orders-section-header-container'>
                        <div className='dashboard-recent-orders-title'>
                            <h2>
                                Recent Orders
                            </h2>
                        </div>
                        <div className='dashboard-recent-orders-control'>
                            <a href='/admin_portal_app/dashboard'>View All</a>
                        </div>
                    </div>
                    <div className='dashboard-recent-order-table-container'>
                        <table className='dashboard-recent-order-table'>
                            <thead>
                                <tr>
                                    <td>Name</td>
                                    <td>Price</td>
                                    <td>OrderId</td>
                                    <td>Status</td>
                                </tr>
                            </thead>
                            <tbody>
                                {RECENT_ORDERS.map((order)=>{
                                    return(
                                        <tr>
                                            <td>{order.orderName}</td>
                                            <td>${order.price}</td>
                                            <td>{order.orderId}</td>
                                            <td><span className={`status ${order.status}`}>{order.status}</span></td>
                                        </tr>
                                    );
                                })}
                                
                            </tbody>
                        </table>
                    </div>
                    

                </div>
                <div className='dashboard-recent-customers-section-container'>

                    <div className='dashboard-recent-orders-section-header-container'>
                        <div className='dashboard-recent-orders-title'>
                            <h2>
                                Recent Customers
                            </h2>
                        </div>
                        <div className='dashboard-recent-orders-control'>
                            <a href='/admin_portal_app/dashboard'>View All</a>
                        </div>
                    </div>

                    <div className='dashboard-recent-customers-container'>
                        {RECENT_CUSTOMERS.map((customer)=>{
                            return(
                                <div className='dashboard-recent-customer'>
                                <div className='customer-image' style={{'--bgColor' : getRandomHexColor()}}>
                                    <ion-icon name="person-outline"></ion-icon>
                                </div>
                                <div className='customer-name-phone-container'>
                                    <div>#{customer.customerId}</div>
                                    <div>{customer.name}</div>
                                    <div>{customer.mobile}</div>
                                </div>
                            </div>
                            );
                        })}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dashboard;
