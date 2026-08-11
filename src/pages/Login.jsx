function Login() {
    return (
        <>
            <header>
                <main>
                    <h1>Login</h1>
                    <form>
                        <div>
                            <label htmlFor="userName">Username:</label>
                            <input type="text" id="username" name="username" placeholder="Username" />
                        </div>
                        <br />
                        <button type="submit">Submit</button>
                    </form>
                </main>
            </header>

        </>
    )
}
export default Login