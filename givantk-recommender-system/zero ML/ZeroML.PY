#define class user  
class User :
    def __init__(self, id, favorite_services , rate , avarage_fees):
        self.id = id
        self.favorite_services = favorite_services
        self.rate = rate 
        self.avarage_fees = avarage_fees
    

#define some users 
user1 = User(1 , ["Education" , "food" , "shopping","A"] , 5 , 15)   
user2 = User (2 , ["A" , "Education" ,"shopping" ] , 2 , 20)
user3 = User(3 , ["food" , "shopping","A"] , 4.8 ,2)   
user4 = User (4 , ["shopping" ,"A" , "Education" ,"food" ] , 3 ,22)
user5 = User (5 , ["shopping" ,"A" , "Education" ,"food" ] , 22 ,22)
userM = User (12 , ["food","shopping"   ] , 5 , 100000)


#define array of users 
Userss  = [user1,user2,user3,user4 , user5]

#define class Service 
class Service :
    def __init__(self,id,body,type,fee):
        self.id = id
        self.body= body
        self.type=type 
        self.fee = fee

#define some services 
service1 = Service(123,"gh","food",3)
service2 = Service(3,"gh","Education",12)
service3 = Service(123,"gh","shopping",5)
service4 = Service(2,"gh","Education",2)
service5 = Service(1,"gh","Education",1)
service6 = Service(123,"gh","shopping",1)
service7 = Service(123,"gh","A",12)

#define array of services 
Services= [service1,service2,service3,service4,service5,service6,service7]
""" print (service1.body)
print (service1.type) """

#print (service1.id)
#sortingServices function aims to sort the services to show it in certain user's available services page . 
#sortingServices function sort the services according to :
    #1 : helper's favorite services 
    #2 : service price 
#sortingServices function is alist of sortring services . 
def sortingServices (services ,userRates):

    #sort according to price .
    sortedByFees = sorted(services, key=lambda x: x.fee, reverse=True)

    #sort according to user's favorite services
    sortType = lambda e:( userRates.index(e.type) if e.type in userRates else len(userRates ) )
    sortedByType = sorted(sortedByFees , key =( sortType))

    return sortedByType

#For test sortingServices function 
""" for i in sortingServices(Services , user1.favorite_services):
    print(i.type) 
    print(i.fee)  """

#sortingUsers function aims to help a user to select good helper . 
#sortingUsers function sorts helpers users according to :
    #1 : helper's rate 
    #2 : helper's favorite service
def sortingUsers (users , serviceType) :
    #define empty list , to add a suitable services to it . 
    listUsers =[]

    #sort according to helper's rate .
    sortedByRate = sorted(users, key=lambda x: x.rate, reverse=True)

    #sort according to helper's favorite service
    for w in sortedByRate:
        if (w.favorite_services[0]==serviceType) :
            listUsers.append(w)
            #print (w.id)
        #print (w.id)
       

    return listUsers

#For test sortingUsers function 

for i in sortingUsers(Userss , service6.type):

    print(i.id) 
     