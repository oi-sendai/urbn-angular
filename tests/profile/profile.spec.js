ddescribe("Unit: UserByUidService", function() {
 
  var redditService, httpBackend;

  beforeEach(module("UserByUid"));

  beforeEach(inject(function (_UserByUidService_, $httpBackend) {
    UserByUidService = _UserByUidService_;
  }));

  it("should do something", function () {
    httpBackend.whenGET("http://api.reddit.com/user/yoitsnate/submitted.json").respond({
        data: {
          children: [
            {
              data: {
                subreddit: "golang"
              }
            },
            {
              data: {
                subreddit: "javascript"
              }
            },
            {
              data: {
                subreddit: "golang"
              }
            },
            {
              data: {
                subreddit: "javascript"
              }
            }
          ]
        }
    });
    redditService.getSubredditsSubmittedToBy("yoitsnate").then(function(subreddits) {
      expect(subreddits).toEqual(["golang", "javascript"]);
    });
    httpBackend.flush();
  });

});