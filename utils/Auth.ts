

export async function isAuthenticated() {
    const storedUserData = localStorage.getItem('userData.refreshToken');

    if (storedUserData) {
        const token = JSON.parse(storedUserData).token;

        try {
            const response = await fetch("https://app.grupoerre.pt:1934/auth/check-authentication-status", {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (response.ok) {
                const data = await response.json();
                return data.isAuthenticated;
            } else {
                console.error("Falha na autenticação:", response.status);
                return false;
            }
        } catch (error) {
            console.error("Erro ao verificar o token:", error);
            return false;
        }
    } else {
        return false;
    }
}
