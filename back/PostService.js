class PostService {
    async getAll(req, res) {
        try {

            return res.json();

        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new PostService;