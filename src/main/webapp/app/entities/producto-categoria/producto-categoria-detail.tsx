import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './producto-categoria.reducer';

export const ProductoCategoriaDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const productoCategoriaEntity = useAppSelector(state => state.productoCategoria.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="productoCategoriaDetailsHeading">
          <Translate contentKey="deliveryopsApp.productoCategoria.detail.title">ProductoCategoria</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{productoCategoriaEntity.id}</dd>
          <dt>
            <span id="nombre">
              <Translate contentKey="deliveryopsApp.productoCategoria.nombre">Nombre</Translate>
            </span>
          </dt>
          <dd>{productoCategoriaEntity.nombre}</dd>
          <dt>
            <span id="description">
              <Translate contentKey="deliveryopsApp.productoCategoria.description">Description</Translate>
            </span>
          </dt>
          <dd>{productoCategoriaEntity.description}</dd>
        </dl>
        <Button tag={Link} to="/producto-categoria" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/producto-categoria/${productoCategoriaEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default ProductoCategoriaDetail;
