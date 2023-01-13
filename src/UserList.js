const UserList=({users})=>{
    return (
        <ul>
            {users.map((user)=>(
                <li>
                    {user.title}
                    <input type="checkbox" checked={user.completed}/>
                </li>
            )
            )}
        </ul>

    );

};
export default UserList;