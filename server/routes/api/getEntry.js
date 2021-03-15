const router = require("express").Router();

// Add cookie middleware and expect mongoid in params
router.get("/getEntry", (req, res) => {
    return res.json({
        _id: "5ff441d166a1920017fd5879",
        date: new Date("03-15-2021"),
        mood: "Happy",
        location: "Olympus Mons, Mars",
        weather: "Fuxking Cold,  -62.78°C",
        updated: new Date("2021-03-14T18:30:00.000Z"),
        entry: [
            {
                time: new Date("2021-03-14T08:30:00.000Z"),
                data:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate elementum eros. Donec gravida facilisis erat non fringilla. Nullam est lorem, sollicitudin ut nulla id, ornare elementum ex. Nulla ut dictum odio. Aliquam convallis ligula sollicitudin, vestibulum nibh ut, tempor velit. Morbi consectetur tempus convallis. Aliquam eu odio quis arcu semper ultrices. Nam nec gravida nisi, ac accumsan nibh. Sed lobortis, quam id porta pharetra, nunc est finibus est, non lobortis lacus est id massa. Cras molestie purus efficitur, laoreet turpis a, pellentesque nisi. Nunc ornare in leo vitae tempus.",
            },
            {
                time: new Date("2021-03-14T10:30:00.000Z"),
                data:
                    "Vestibulum lobortis sit amet quam vel varius. Sed dapibus lacus in lectus blandit congue. Vestibulum tempus augue quis nulla tempus, et congue erat sodales. In sagittis fringilla elit, bibendum consequat eros. Nam quis nulla ac ligula tempus egestas. Vestibulum rhoncus lacus sagittis augue blandit, sit amet molestie nunc viverra. Ut neque tortor, egestas in libero dapibus, aliquam pharetra urna. Donec in lobortis odio. Proin a tristique sem, a accumsan ligula.",
            },
            {
                time: new Date("2021-03-14T18:30:00.000Z"),
                data:
                    "Nullam non purus posuere, iaculis lectus et, fermentum turpis. Vestibulum lacinia massa in quam mattis mattis. Fusce eu magna rutrum, pretium sapien eget, mollis velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer eget semper lorem. Suspendisse elementum commodo ultricies. Nulla nec ipsum at risus tincidunt facilisis vel nec lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
            },
        ],
        image: [
            "https://images.unsplash.com/photo-1613637069737-2cce919a4ab7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1920&ixlib=rb-1.2.1&q=80&w=1080",
            "https://images.unsplash.com/photo-1613847103287-bd7ce7155b87?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1920&ixlib=rb-1.2.1&q=80&w=1080",
        ],
    });
});

module.exports = router;
