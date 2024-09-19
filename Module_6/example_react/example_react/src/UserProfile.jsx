const UserProfile = ({ name, age, location }) => {
    return (
        <>
            <h1>{name}</h1> 
            <p>{age}</p>
            <p>{location}</p>
        </>
    )
}

export default UserProfile;
