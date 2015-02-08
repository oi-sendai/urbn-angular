describe("Unit: CloudCtrl", function() {
 
    var testScope;

    var CloudCtrl, $location, mockUserService, mockUsers, q, deferred;
 
    beforeEach( module( 'SystemApp' ) );
 
    beforeEach(function() {
 
      mockUsers = [
        { "username": "user3", "skills": [ {"name":"design"}, {"name":"javascript"}, {"name":"testing"} ] },
        { "username": "user2", "skills": [ {"name":"design"}, {"name":"javascript"}] },
        { "username": "user1", "skills": [ {"name":"design"}] }
      ];
 
      mockUserService = {
            users: function(){
              console.log(q);
                deferred = q.defer();
                deferred.resolve('data');
                return deferred.promise;
            }
        }
 
    });
 
    beforeEach( inject( function( $controller, _$q_, $rootScope ) {
                q = _$q_;
 
        testScope = $rootScope.$new();
         
        CloudCtrl = $controller( 'CloudCtrl', { 
            CloudFactory: mockUserService, 
            $scope: testScope 
        });
         
    }));

    
    it('init(): should return all skills held by users', function(){
      spyOn(mockUserService, 'users').andCallThrough();
      testScope.init();
      expect(mockUserService.users).toHaveBeenCalled();
    });

    it('countSkills(skill): should add new skills to array', function(){
      testScope.skills = [] ;
      testScope.countSkills('javascript');
      expect(testScope.skills[0].text).toEqual('javascript');
    });

    it('countSkills(skill): should increment existing skill weighting', function(){
      testScope.users = [
        { "username": "user2", "skills": [ {"name":"php"}, {"name":"javascript"}] },
        { "username": "user1", "skills": [ {"name":"javascript"}] }
      ];
      testScope.skills = [{text:'javascript',weight:1}] ;
      testScope.countSkills('javascript');
      expect(testScope.skills[0].weight).toEqual(2);
    });

    it('countSkills(skill): should not include excluded skills in weighting', function(){
      testScope.users = [
        { "username": "user2", "skills": [ {"name":"php"}, {"name":"javascript"}] },
        { "username": "user1", "skills": [ {"name":"javascript"}] },
        { "username": "user1", "skills": [ {"name":"php"}] }
      ];
      testScope.filters = ['php'];
      testScope.skills = [{text:'javascript',weight:1}] ;
      testScope.countSkills('javascript');
      expect(testScope.skills[0].weight).toEqual(2);
    });


    it('addFilter(filter); should add filter to filters array', function(){
      testScope.filters = []
      testScope.addFilter('php');
      expect(testScope.filters[0]).toEqual('php');
    });

    it('removeFilter(filter); should remove filter from filters array', function(){
      testScope.filters = ['php','javascript'];
      testScope.removeFilter('php');
      expect(testScope.filters[0]).toEqual('javascript');
    });

    it('filterUsers(skills); should update active users array', function(){
      testScope.filters = ['php'];
      testScope.users = [
        { "username": "user2", "skills": [ {"name":"php"}, {"name":"javascript"}] },
        { "username": "user1", "skills": [ {"name":"javascript"}] }
      ]
      testScope.filterUsers(testScope.filters);
      expect(testScope.activeUsers.length).toEqual(1);
    });

    it('filterUsers(skills); should only return users with all skills', function(){
      testScope.filters = ['php','javascript'];
      testScope.users = [
        { "username": "user1", "skills": [ {"name":"javascript"}] },
        { "username": "user1", "skills": [ {"name":"php"}] },
        { "username": "user3", "skills": [ {"name":'php'},{"name":"javascript"}] }
      ]
      testScope.filterUsers(testScope.filters);
      expect(testScope.activeUsers.length).toEqual(1);
    });
 
});
 
 
 
    // it('should load scope', function() {

    //     expect(testScope.debug).toEqual('CloudCtrl');
    // });

    // it('usersService(): should look for users with given skill set', function(){
    //     expect(returnObject).toBeDefined

    // });

      // $scope.users = [
      //   { "username": "user3", "skills": [ {"name":"design"}, {"name":"javascript"}, {"name":"testing"} ] },
      //   { "username": "user2", "skills": [ {"name":"design"}, {"name":"javascript"}] },
      //   { "username": "user1", "skills": [ {"name":"design"}] }
      // ]


      // if filter == testing
      //   return user3
      //   design(1), javascript(1)
      // if filter == design 
      //   return user3, user2, user1
      //   design(3), javascript(2), testing(1)
      // if filter == design && javascript
      //   return user3, user2
      //     testing(1)






    // 

    //   take array of users 
    // get all skills (skill counting seperate)
    //   display


    //   take array of users
    // get all users with desired skill
    //   display
    // get all other skills held by users with desired skill
    //   display
    // create a list of desired skills
    //   refresh display
    // allow removal of desired from list
    //   refresh displa 

    //   take array of users
    // get all users with all desired skills
    //   display
    // it('should not return user without desired skill')

