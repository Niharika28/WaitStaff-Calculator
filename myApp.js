angular.module("myApp",[])
		. controller('WaitStaffCtrl', function(){
			var vm = this;
			vm.subTotal = 0.00;
			vm.tip = 0.00;
			vm.total = 0.00;

			vm.calculateCustomerCharges = function(){
				vm.subTotal = vm.mealPrice + ((vm.mealPrice * vm.taxRate) / 100);
				vm.tip =  ((vm.subTotal * vm.tipPercent) / 100);
				vm.total = vm.subTotal + vm.tip;
			}
		});


