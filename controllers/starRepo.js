import fetch from "node-fetch";

// Otorgar estrella a repositorio
const starRepo = async (req, res) => {

    const owner = `${req.query.repositoryOwner}`;
    const repo = `${req.query.repository}`;
    const token = `${req.session.token}`; 

    // URL de la API de Github para otorgar estrella al repositorio
    const apiUrl = `https://api.github.com/user/starred/${owner}/${repo}`;

    try {
        const response = await fetch(apiUrl, {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Accept": "application/vnd.github+json",
                "Content-Length": "0"
            }
        });
        
        const data = await response.json();

        if(data.status === 200){
            res.status(200).json({
                code: 200,
                data
            });
            console.log("Starred repo succesfully!");
        }else{
            res.status(400).json({
                code: 400,
                message: "Error starring the repository"
            });  
        }
        
    } catch (error) {
        res.status(400).json({
            code: 400,
            message: "Error starring the repository"
        });
        console.error("There was an error starring repository.", error.response.data);
    }

}

export default starRepo;