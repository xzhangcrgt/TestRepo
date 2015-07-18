<section data-ng-controller="GuidelinesController" data-ng-init="find()">
    <div class="page-header">
        <h1>Guidelines</h1>
    </div>
    <div class="list-group">
        <a data-ng-repeat="guideline in guidelines" data-ng-href="#!/guidelines/{{guideline._id}}" class="list-group-item">
			<!--<small class="list-group-item-text">
				Posted on
				<span data-ng-bind="guideline.created | date:'medium'"></span>
				by
				<span data-ng-bind="guideline.user.displayName"></span>
			</small> -->
			<h4 class="list-group-item-heading" data-ng-bind="guideline.name"></h4>
        </a>
        
    </div>
    <div class="alert alert-warning text-center" data-ng-hide="!guidelines.$resolved || guidelines.length">
    	No Guidelines yet, why don't you <a href="/#!/guidelines/create">create one</a>?
    </div>
</section>







========================================================================
<style type="text/css">
    .Table
    {
        display: table;
    }
    .Title
    {
        display: table-caption;
        text-align: center;
        font-weight: bold;
        font-size: larger;
    }
    .Heading
    {
        display: table-row;
        font-weight: bold;
        text-align: center;
    }
    .Row
    {
        display: table-row;
    }
    .Cell
    {
        display: table-cell;
        border: none;
        padding-left: 5px;
        padding-right: 5px;
    }
</style>

<section data-ng-controller="GuidelinesController" data-ng-init="find()">
    <div class="page-header">
        <h1>Guidelines</h1>
    </div>
    <div class="Table">
        <div class="Heading">
            <div class="Cell">
                <p>Guildline Name</p>
            </div>
            <div class="Cell">
                <p>Category</p>
            </div>
             
            <div class="Cell">
                <p>&nbsp;</p>
            </div>
             <div class="Cell">
                <p>&nbsp;</p>
            </div>
        </div>
        <div class="list-group Row" data-ng-repeat="guideline in guidelines">
            <div class="Cell">
                <p><h4 class="list-group-item-heading" data-ng-bind="guideline.name"></h4></p>
            </div>
            <div class="Cell">
                <p><span data-ng-bind="guideline.category_code"></span></p>
            </div>
           
            <div class="Cell">
                <p><button ng-show="admin_user" data-ng-click="editGuideline(guideline._id)">Edit</button></p>
            </div>
            <div class="Cell">
                <p><button ng-show="admin_user" data-ng-click="deleteGuideline(guideline)">Delete</button></p>
            </div>
        </div>
    </div> 
    
    <p><button ng-show="admin_user" data-ng-click="addGuideline()">Add</button></p>
    
</section>