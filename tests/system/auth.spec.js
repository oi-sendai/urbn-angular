describe("Unit: AuthCtrl", function() {
 
    var testScope;

    var AuthCtrl, $location, mockUserService, mockUsers, q, deferred;
 
    beforeEach( module( 'SystemApp' ) );
    beforeEach( module( 'AuthCtrlSystem' ) );
 
    beforeEach(function() {
 
      // mockUsers = [
    //     { "username": "user3", "skills": [ {"name":"design"}, {"name":"javascript"}, {"name":"testing"} ] },
    //     { "username": "user2", "skills": [ {"name":"design"}, {"name":"javascript"}] },
    //     { "username": "user1", "skills": [ {"name":"design"}] }
    //   ];
 
    //   mockUserService = {
    //         fetchUsers: function(){
    //           console.log(q);
    //             deferred = q.defer();
    //             deferred.resolve('data');
    //             return deferred.promise;
    //         }
    //     }
 
    });
 
    beforeEach( inject( function( $controller, _$q_, $rootScope ) {
                q = _$q_;
 
        testScope = $rootScope.$new();
         
        AuthCtrl = $controller( 'AuthCtrl', { 
            // UserFactory: mockUserService, 
            $scope: testScope 
        });
         
    }));

    
    // it('init(): should return all skills held by users', function(){
    //   spyOn(mockUserService, 'fetchUsers').andCallThrough();
    //   testScope.init();
    //   expect(mockUserService.fetchUsers).toHaveBeenCalled();
    // });

    it('should work', function(){
      testScope.skills = 'yup';
      // testScope.countSkills('javascript');
      expect(testScope.skills).toEqual('yup');

    });
});



    // it('countSkills(skill): should increment existing skill weighting', function(){
    //   testScope.users = [
    //     { "username": "user2", "skills": [ {"name":"php"}, {"name":"javascript"}] },
    //     { "username": "user1", "skills": [ {"name":"javascript"}] }
    //   ];
    //   testScope.skills = [{text:'javascript',weight:1}] ;
    //   testScope.countSkills('javascript');
    //   expect(testScope.skills[0].weight).toEqual(2);

    // });

    // it('countSkills(skill): should not include excluded skills in weighting', function(){
    //   testScope.users = [
    //     { "username": "user2", "skills": [ {"name":"php"}, {"name":"javascript"}] },
    //     { "username": "user1", "skills": [ {"name":"javascript"}] },
    //     { "username": "user1", "skills": [ {"name":"php"}] }
    //   ];
    //   testScope.filters = ['php'];
    //   testScope.skills = [{text:'javascript',weight:1}] ;
    //   testScope.countSkills('javascript');
    //   expect(testScope.skills[0].weight).toEqual(2);

    // });


    // it('addFilter(filter); should add filter to filters array', function(){
    //   testScope.filters = []
    //   testScope.addFilter('php');
    //   expect(testScope.filters[0]).toEqual('php');
    // });

    // it('removeFilter(filter); should remove filter from filters array', function(){
    //   testScope.filters = ['php','javascript'];
    //   testScope.removeFilter('php');
    //   expect(testScope.filters[0]).toEqual('javascript');
    // });

    // it('filterUsers(skills); should update active users array', function(){
    //   testScope.filters = ['php'];
    //   testScope.users = [
    //     { "username": "user2", "skills": [ {"name":"php"}, {"name":"javascript"}] },
    //     { "username": "user1", "skills": [ {"name":"javascript"}] }
    //   ]
    //   testScope.filterUsers(testScope.filters);
    //   expect(testScope.activeUsers.length).toEqual(1);
    // });

    // it('filterUsers(skills); should only return users with all skills', function(){
    //   testScope.filters = ['php','javascript'];
    //   testScope.users = [
    //     { "username": "user1", "skills": [ {"name":"javascript"}] },
    //     { "username": "user1", "skills": [ {"name":"php"}] },
    //     { "username": "user3", "skills": [ {"name":'php'},{"name":"javascript"}] }
    //   ]
    //   testScope.filterUsers(testScope.filters);
    //   expect(testScope.activeUsers.length).toEqual(1);
    // });
 
 