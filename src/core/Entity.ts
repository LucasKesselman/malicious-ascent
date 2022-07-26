import * as THREE from "three";
import * as CANNON from 'cannon-es'

import Component from "./Component";

export default class Entity {


    private _entityId: string;
    private _entityName: string;
    private _entityType: string;

    private _components: Component[];

    private _isActive: boolean = false;

    private _mesh: THREE.Mesh;
    private _body: CANNON.Body;




    /**
     * @param  {string} id
     * @param  {string} name
     * @param  {string} type
     */
    public constructor(id: string, name: string, type: string) {

        this._entityId = id;
        this._entityName = name;
        this._entityType = type;

        this._components = [];

    }
    /**
     * @returns THREE
     */
    public GetMesh(): THREE.Mesh {
        return this._mesh;
    }
    /**
     * @param  {any} geometrey
     * @param  {any} material
     * @returns void
     */
    public SetMesh( geometrey: any, material: any ): void {
        
        this._mesh = new THREE.Mesh(geometrey, material);

    }

    /**
     */
    public SetBody() {
        this._body = new CANNON.Body({
            mass: 0,
            material: new CANNON.Material("ground"),
            shape: new CANNON.Cylinder(5, 1, 5, 16),
            position: new CANNON.Vec3(0, 0, 0),
            velocity: new CANNON.Vec3(0, 4, 0)
        });
    }

    /**
     * ### GetBody();
     * @returns {CANNON.Body} this._body
     */
    public GetBody(): CANNON.Body {
        return this._body;
    }

    /**
     * @param  {Component} component
     * @returns void
     */
    public AddComponent(component: Component): void {
        this._components.push(component);
    }

    /**
     * @param  {Component} component
     * @returns void
     */
    public RemoveComponent(component: Component): void {

        let index = this._components.indexOf(component);
        if (index > -1) {
            this._components.splice(index, 1);
        }
    }

    /**
     * @returns string
     */
    public GetId(): string {
        return this._entityId;
    }

    /**
     * @returns string
     */
    public GetName(): string {
        return this._entityName;
    }

    /**
     * @returns string
     */
    public GetType(): string {
        return this._entityType;
    }

    /**
     * @returns Component
     */
    public GetComponents(): Component[] {
        return this._components;
    }

    /**
     * @param  {boolean} isActive
     * @returns void
     */
    public SetActive(isActive: boolean): void {
        this._isActive = isActive;
    }


}